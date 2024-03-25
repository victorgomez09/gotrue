<script module="context" lang="ts">
	import { createForm } from 'svelte-forms-lib';
	import * as yup from 'yup';
	import DataGrid from '$lib/components/data-grid.svelte';

	const { errors, form, touched, isValid, handleChange, handleSubmit } = createForm({
		initialValues: {
			name: null,
			email: null,
			password: null
		},
		validationSchema: yup.object().shape({
			name: yup.string().required(),
			email: yup.string().email().required(),
			password: yup.string().required()
		}),
		onSubmit: (values) => {
			console.log('values', values);
		}
	});
</script>

<div class="flex flex-1 items-center w-full h-full p-4">
	<div class="card shadow bg-base-100 w-full h-full">
		<div class="card-body p-4">
			<div class="flex items-center justify-between">
				<h3 class="card-title">Users Management</h3>
				<label for="create-user-modal" class="btn">Create user</label>
			</div>

			<div>
				<DataGrid />
			</div>
		</div>
	</div>
</div>

<input type="checkbox" id="create-user-modal" class="modal-toggle" />
<div class="modal" role="dialog">
	<div class="modal-box">
		<label class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" for="create-user-modal">
			✕
		</label>
		<div class="flex flex-col">
			<form on:submit={handleSubmit}>
				<label class="form-control w-full">
					<div class="label">
						<span class="label-text">Name</span>
					</div>
					<input
						type="text"
						placeholder="Type here"
						class="input input-bordered w-full"
						class:input-error={$errors.name}
						name="name"
						on:change={handleChange}
						on:blur={handleChange}
						bind:value={$form.name}
					/>
					{#if $errors.name}
						<div class="label">
							<span class="label-text-alt text-error">{$errors.name}</span>
						</div>
					{/if}
				</label>

				<label class="form-control w-full">
					<div class="label">
						<span class="label-text">Email</span>
					</div>
					<input
						type="email"
						placeholder="Type here"
						class="input input-bordered w-full"
						class:input-error={$errors.email}
						name="email"
						on:change={handleChange}
						on:blur={handleChange}
						bind:value={$form.email}
					/>
					{#if $errors.email}
						<div class="label">
							<span class="label-text-alt text-error">{$errors.email}</span>
						</div>
					{/if}
				</label>

				<label class="form-control w-full">
					<div class="label">
						<span class="label-text">Password</span>
					</div>
					<input
						type="text"
						placeholder="Type here"
						class="input input-bordered w-full"
						class:input-error={$errors.password}
						name="password"
						on:change={handleChange}
						on:blur={handleChange}
						bind:value={$form.password}
					/>
					{#if $errors.password}
						<div class="label">
							<span class="label-text-alt text-error">{$errors.password}</span>
						</div>
					{/if}
				</label>

				<button
					class="btn btn-primary mt-4"
					type="submit"
					disabled={!$isValid || (!$touched.email && !$touched.password && !$touched.name)}
					>Create user</button
				>
			</form>
		</div>
	</div>
	<label class="modal-backdrop" for="create-user-modal">Close</label>
</div>
