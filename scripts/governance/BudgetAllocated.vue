<script setup>
import { toRefs } from 'vue';
import { numberToCurrency } from '../misc.js';
const props = defineProps({
    currency: String,
    price: Number,
    allocatedBudget: Number,
});
const { currency, price, allocatedBudget } = toRefs(props);
</script>

<template>
    <span
        data-i18n="govAllocBudget"
        style="font-weight: 400; color: #def7ff; font-size: 18px"
        >Budget Allocated</span
    >

    <div
        style="
            width: 180px;
            background-color: #116970;
            margin-top: 11px;
            border-radius: 9px;
            padding-left: 13px;
            padding-right: 13px;
            padding-bottom: 6px;
            padding-top: 4px;
        "
    >
        <span style="font-size: 19px; color: #"
            ><span data-testid="allocatedGovernanceBudget">{{
                allocatedBudget.toLocaleString('en-gb', ',', '.') + ' '
            }}</span>
            <span
                style="
                    color: #31c6ea;
                    font-size: 16px;
                    position: relative;
                    top: 1px;
                "
                >ZNZ</span
            ></span
        >
        <hr
            style="
                border-top-width: 2px;
                background-color: #14312b;
                margin-top: 5px;
                margin-bottom: -2px;
                margin-left: -13px;
                margin-right: -13px;
            "
        />
        <span style="font-size: 12px; color: #9cc6c6"
            ><span data-testid="allocatedGovernanceBudgetValue">{{
                numberToCurrency(allocatedBudget, price)
            }}</span>
            {{ ' ' }}
            <span
                style="color: #1ddaea"
                data-testid="allocatedGovernanceBudgetCurrency"
                >{{ currency.toUpperCase() }}
            </span>
        </span>
    </div>
</template>
