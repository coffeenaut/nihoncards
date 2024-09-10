<script setup>
</script>
<template>
    <!--Card template with title embossed inside image. Description below image.-->
    <div class="flex-col cardItem p-4">
        <div class="flex justify-center font-bold text-lg">
            <slot name="title"></slot>
        </div>
        <div class="flex justify-center py-6">
            <slot name="image"></slot>
        </div>
        <div class="flex justify-start">
            <slot></slot>
        </div>
    </div>
</template>