<template>
    <PanelItem :index="index" :field="field">
        <template #value>
            <url-field :field="field" :clickable="field.clickable"></url-field>
        </template>
    </PanelItem>
</template>

<script>
import Url from './Url'

export default {
    props: ['index', 'resource', 'resourceName', 'resourceId', 'field'],

    components: {
        'url-field': Url
    }
}
</script>
