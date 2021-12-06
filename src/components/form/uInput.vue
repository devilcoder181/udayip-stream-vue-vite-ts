<template>
    <div class="type_field">
        <label :for="inputFor">{{name}}</label>
        <input 
        :type="inputType" 
        :name="inputFor" 
        :class="{error_: isValid}" 
        :value="modelValue" 
        @input="$emit('update:modelValue', $event.target.value)"/>
        <span class="error_" v-if="isValid">{{validationMessage}}</span>
    </div>
</template>

<script lang="ts">
    export default {
        props: {
            name: {
                type: String,
                required: true
            },
            modelValue: String,
            inputType: {
                type: String,
                required: true
            },
            inputFor: {
                type: String,
                required: true
            },
            isValid: {
                type: Boolean,
                required: true
            },
            validationMessage: {
                type: String,
                required: false
            }

        }
    }
</script>

<style lang="scss" scoped>

.type_field{
    position: relative;
    display: block;
    width: 100%;
    text-align: start;

    label{
        position: relative;
        display: block;
        font-weight: 500;
        font-size: var(--sm-text-2);
        line-height: 1.75;
        opacity: 0.5;
    }

    input{
        position: relative;
        display: block;
        width: 100%;
        box-sizing: border-box;
        background-color: var(--form-color);
        border: none; 
        outline: none;
        height: 3rem;
        border-radius: 0.5rem;
        border: 1px solid var(--form-color);
        transition: all 0.3s ease;
        padding: 0 1em;
        font-weight: 500;
        font-size: var(--md-text);
        color: var(--color-white);

        &:focus{
            border: 1px solid var(--primary-color);
            box-shadow: 0px 4px 10px  -2px var(--primary-color);
        }

        &.error_{
            border-color: var(--color-red);
        }
    }

    span.error_{
        position: relative;
        display: inline-block;
        text-align: center;
        padding: 0.25em 1em;
        margin-top: 0.5em;
        border-radius: 0.25em;
        background-color: var(--color-red);
        color: var(--color-white);
        font-size: var(--sm-text);
    }
}
</style>