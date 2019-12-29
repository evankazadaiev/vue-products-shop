<template>
    <v-card class="pa-9" min-width="70%">
        <v-card-title class="pa-0">
            <div class="d-flex flex-grow-1 align-center justify-space-between">
                <h1 class="title font-weight-regular">{{ modeTitle }}</h1>
            </div>
        </v-card-title>
        <form>
        <v-text-field
                v-model="name"
                :error-messages="nameErrors"
                :counter="10"
                label="Name"
                required
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
        ></v-text-field>
        <v-text-field
                v-model="description"
                :error-messages="descriptionErrors"
                :counter="60"
                label="Description"
                required
                @input="$v.description.$touch()"
                @blur="$v.description.$touch()"
        ></v-text-field>
        <v-text-field
                v-model="price"
                :error-messages="priceErrors"
                label="Price ($)"
                type="number"
                required
                @input="$v.price.$touch()"
                @blur="$v.price.$touch()"
        ></v-text-field>
        <v-btn outlined small color="red lighten-1" class="white--text mr-4" @click="cancel">Cancel</v-btn>
        <v-btn outlined small color="deep-purple lighten-1" class="white--text mr-4" @click="submit">{{ mode }}</v-btn>
    </form>
    </v-card>
</template>

<script>
  import { mapActions } from 'vuex';
  import { MODES } from '@/constants/'
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, minValue } from 'vuelidate/lib/validators'

  export default {
    mixins: [validationMixin],
    validations: {
      name: { required, maxLength: maxLength(10) },
      description: { required, maxLength: maxLength(60) },
      price: { required, minValue: minValue(2) },
    },
    data: () => ({
      MODES,
      name: '',
      description: '',
      price: 0,
      id: ''
    }),
    computed: {
      mode() {
        return this.$route.name === 'CreateProduct' ? this.MODES.CREATE : this.MODES.UPDATE;
      },
      modeTitle() {
        const { id = 0 } = this.$route.params;
        return this.mode === this.MODES.CREATE ? 'Create new product' : `Edit product with id: ${id}`
      },
      randomId() {
        return [...Array(10)].map(() =>(~~(Math.random()*36)).toString(36)).join('');
      },
      nameErrors () {
        const errors = [];
        if (!this.$v.name.$dirty) return errors;
        !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long');
        !this.$v.name.required && errors.push('Name is required.');
        return errors
      },
      descriptionErrors() {
        const errors = [];
        if (!this.$v.description.$dirty) return errors;
        !this.$v.description.maxLength && errors.push('Description should be less than 60 characters long');
        !this.$v.description.required && errors.push('Description is required.');
        return errors;
      },
      priceErrors() {
        const errors = [];
        if(!this.$v.price.$dirty) return errors;
        !this.$v.price.minValue && errors.push('Minimum price should not be less than 2 dollars');
        !this.$v.price.required && errors.push('Price is required');
        return errors;
      }
    },
    async mounted() {
      if(this.mode === this.MODES.UPDATE) {
        const { id = 0 } = this.$route.params;
        const { name, description, price } = await this.findProductById(id);
        this.name = name;
        this.description = description;
        this.price = price;
        this.id = id;
      }
    },
    methods: {
      ...mapActions({
        createProduct: 'products/createProduct',
        updateProduct: 'products/updateProduct',
        findProductById: 'products/findProductById'
      }),
      async submit () {
        this.$v.$touch();
        if(this.$v.$invalid) return;
        this.mode === this.MODES.CREATE ? await this.handleCreate() : await this.handleUpdate();
        this.$router.push('/');
      },
      handleCreate() {
        const product = {
          name: this.name,
          description: this.description,
          price: this.price,
          id: this.randomId
        };
        return this.createProduct(product);
      },
      handleUpdate() {
        const product = {
          name: this.name,
          description: this.description,
          price: this.price,
          id: this.id
        };
        return this.updateProduct(product);
      },
      cancel () {
        this.$v.$reset();
        this.$router.push('/');
      },
    },
  }
</script>

<style scoped>

</style>
