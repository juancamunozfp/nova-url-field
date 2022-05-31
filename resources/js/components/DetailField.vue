<template>
    <PanelItem :field="field">
        <template slot="value">
            <url-field :field="field" :clickable="field.clickable"></url-field>
        </template>
    </PanelItem>
</template>

<script>
import Url from './Url'

export default {
    props: ['resource', 'resourceName', 'resourceId', 'field'],

    components: {
        'url-field': Url
    }
}
</script>
