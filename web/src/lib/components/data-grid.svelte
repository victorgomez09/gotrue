<script context="module" lang="ts">
	import Grid from 'gridjs-svelte';
	import { html } from 'gridjs';

	const columns = [
		{
			name: 'Name',
			formatter: (cell: any) =>
				html(`<div class="flex items-center gap-3">
							<div class="avatar placeholder">
					<div class="bg-neutral text-neutral-content rounded-full w-12">
						<span>JD</span>
					</div> 
            </div>
            <div>
              <div class="font-bold">${cell.name}</div>
              <div class="text-sm opacity-50">${cell.email}</div>
            </div>
          </div>`)
		},
		'Salary'
	];
	const data = [
		[
			{
				name: 'John Doe',
				email: 'john@doe.com'
			},
			Math.round(Math.random() * 100000)
		]
	];
	const search = {
		selector: (cell: any, _rowIndex: number, cellIndex: number) =>
			cellIndex === 0 ? cell.name : cell
	};
	const className = {
		container: 'mt-4',
		table: 'table mt-2',
		th: 'text-left'
	};
</script>

<Grid {columns} {data} {className} {search} sort="true" resizable="true" />

<style lang="postcss">
	:global(.gridjs-search-input) {
		@apply input input-bordered w-full;
	}
	:global(.gridjs-search-input:focus) {
		box-shadow: none !important;
		border-color: transparent !important;
		@apply !input-bordered;
	}
	:global(.gridjs-wrapper) {
		@apply shadow;
	}
</style>
