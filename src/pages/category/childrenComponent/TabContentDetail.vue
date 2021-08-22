<template>
	<good-list :goods="categoryDetail"></good-list>
</template>

<script>
	import GoodList from "@/components/GoodList";
	// import GoodItem from "@/components/GoodItem";
	export default {
		components: {
			// GoodItem,
			GoodList
		},
		props: {
			categoryDetail: {
				type: Array,
				default() {
					return [];
				}
			}
		}
	};
</script>

<style scoped>

</style>