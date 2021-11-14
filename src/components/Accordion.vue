<template>
    <article class="accordion vgt-inner-wrap"
             id="accordion"
    >
        <section class="accordion-item"
                 v-for="(item, index) in items"
                 :key="index"
        >
            <h2 class="accordion-header"
                :id="`heading${item.id}`"
            >
                <button class="accordion-button"
                        :class="{'collapsed': index !== 0}"
                        type="button"
                        data-bs-toggle="collapse"
                        :data-bs-target="`#collapse${item.id}`"
                        aria-expanded="true"
                        :aria-controls="`collapse${item.id}`"
                >
                    <strong>{{ item.title }}</strong>
                </button>
            </h2>
            <div :id="`collapse${item.id}`"
                 :class="{'show': index === 0}"
                 class="accordion-collapse collapse"
                 :aria-labelledby="`heading${item.id}`"
                 data-bs-parent="#accordion"
            >
                <p class="accordion-body py-2 my-2">
                    {{ item.body }}
                </p>
            </div>
        </section>
    </article>
</template>

<script>
export default {
    name: "Accordion",
    props: {
        items: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style scoped>

</style>