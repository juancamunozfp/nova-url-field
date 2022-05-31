<template>
    <DefaultField :field="field" :errors="errors" :show-help-text="showHelpText">
        <template #field>
            <input
                class="w-full form-control form-input form-input-bordered"
                :id="field.attribute"
                :dusk="field.attribute"
                v-model="value"
                v-bind="extraAttributes"
                :disabled="isReadonly"
            />
        </template>
    </DefaultField>
</template>

<script>
import {FormField, HandlesValidationErrors} from "../../../vendor/laravel/nova/resources/js/mixins/packages";

export default {
    mixins: [HandlesValidationErrors, FormField],

    computed: {
        defaultAttributes() {
            return {
                type: this.field.type || 'url',
                placeholder: this.field.placeholder || this.field.name,
                class: this.errorClasses,
            }
        },

        extraAttributes() {
            const attrs = this.field.extraAttributes

            return {
                ...this.defaultAttributes,
                ...attrs,
            }
        },
    },
}
</script>
