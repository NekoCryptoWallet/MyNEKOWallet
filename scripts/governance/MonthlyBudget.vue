<script setup>
import { toRefs } from 'vue';
import { cChainParams, COIN } from '../chain_params';
import { numberToCurrency } from '../misc.js';
const props = defineProps({
    currency: String,
    price: Number,
});
const { currency, price } = toRefs(props);
</script>

<template>
    <div class="col-6 col-lg-3 text-center governBudgetCard">
        <span
            data-i18n="govMonthlyBudget"
            style="font-weight: 400; color: #def7ff; font-size: 18px"
            >Monthly Budget</span
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
            <span style="font-size: 19px; color: #def7ff"
                ><span>
                    {{
                        (cChainParams.current.maxPayment / COIN).toLocaleString(
                            'en-gb',
                            ',',
                            '.'
                        )
                    }}
                    {{ ' ' }}
                </span>
                <span
                    style="
                        color: #31c6ea;
                        font-size: 16px;
                        position: relative;
                        top: 1px;
                    "
                    >{{ cChainParams.current.TICKER }}</span
                ></span
            >
            <hr
                style="
                    border-top-width: 2px;
                    background-color: #143131;
                    margin-top: 5px;
                    margin-bottom: -2px;
                    margin-left: -13px;
                    margin-right: -13px;
                "
            />
            <span style="font-size: 12px; color: #9cc3c6"
                ><span data-testid="monthlyBudgetValue">
                    {{
                        numberToCurrency(
                            cChainParams.current.maxPayment / COIN,
                            price
                        )
                    }}
                    {{ ' ' }}
                </span>
                <span style="color: #1ddaea" data-testid="monthlyBudgetCurrency"
                    >{{ currency.toUpperCase() }}
                </span>
            </span>
        </div>
    </div>
</template>
