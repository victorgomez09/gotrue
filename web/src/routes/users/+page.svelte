<script module="context" lang="ts">
	import { createForm } from 'svelte-forms-lib';
	import yup from 'yup';
	import DataGrid from '$lib/components/data-grid.svelte';

	const { errors, form, touched, handleChange, handleSubmit } = createForm({
		initialValues: {
			email: '',
			password: ''
		},
		validationSchema: yup.object().shape({
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
				<label class="form-control w-full max-w-xs">
					<div class="label">
					  <span class="label-text">What is your name?</span>
					</div>
					<input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
					<div class="label">
					  <span class="label-text-alt">Bottom Left label</span>
					  <span class="label-text-alt">Bottom Right label</span>
					</div>
				  </label>
			</form>
		</div>
	</div>
	<label class="modal-backdrop" for="create-user-modal">Close</label>
</div>
