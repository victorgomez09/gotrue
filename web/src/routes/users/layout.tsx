import { Slot, component$ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";

export default component$(() => {
  const loc = useLocation();

  return (
    <div class="flex flex-1 gap-4 items-center w-full h-full">
      <ul class="menu shadow rounded-box bg-base-100 w-56 h-full">
        <li>
          <Link
            href="/users"
            class={{ active: loc.url.pathname === "/users/" }}
          >
            Management
          </Link>
        </li>
        <li>
          <Link
            href="/users/roles"
            class={{ active: loc.url.pathname === "/users/roles" }}
          >
            Roles
          </Link>
        </li>
        <li>
          <Link
            href="/users/providers"
            class={{ active: loc.url.pathname === "/users/providers" }}
          >
            Providers
          </Link>
        </li>
        <li>
          <Link
            href="/users/email"
            class={{ active: loc.url.pathname === "/users/email" }}
          >
            Email templates
          </Link>
        </li>
      </ul>
      <div class="card shadow bg-base-100 h-full w-full">
        <div class="card-body p-4">
          <Slot />
        </div>
      </div>
    </div>
  );
});
