import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h3 class="card-title">Users</h3>

      <div class="w-full h-full">
        <div class="overflow-x-auto">
          <table class="table">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div class="flex items-center gap-3">
                    <div class="avatar placeholder">
                      <div class="bg-neutral text-neutral-content rounded-full w-8">
                        <span class="text-xs">UI</span>
                      </div>
                    </div>
                    <div>
                      <div class="font-bold">Hart Hagerty</div>
                      <div class="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>
                  Zemlak, Daniel and Leannon
                  <br />
                  <span class="badge badge-ghost badge-sm">
                    Desktop Support Technician
                  </span>
                </td>
                <td>Purple</td>
                <th>
                  <Link
                    class="btn btn-ghost btn-xs"
                    href={`/users/1asdfa54t6sd534f`}
                  >
                    details
                  </Link>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
});
