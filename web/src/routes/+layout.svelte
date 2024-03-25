<script context="module" lang="ts">
	import { page } from '$app/stores';

	import 'gridjs/dist/theme/mermaid.css';
	import '../main.css';
</script>

<div class="flex flex-1 bg-base-300 w-full h-full">
	<div class="drawer drawer-open">
		<input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
		<div class="drawer-content flex flex-col items-center justify-center">
			<!-- Page content here -->
			<slot />
		</div>
		<div class="drawer-side">
			<label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
			<ul class="menu p-4 w-40 full text-base-content bg-base-100 min-h-full">
				<li class="menu-title">VIRA AUTH</li>
				<!-- Sidebar content here -->
				<li><a href="/users" class:active={$page.url.pathname.includes('/users')}>Users</a></li>
			</ul>
		</div>
	</div>
</div>
