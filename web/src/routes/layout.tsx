import { component$, Slot } from "@builder.io/qwik";
import { Link, useLocation, type RequestHandler } from "@builder.io/qwik-city";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export default component$(() => {
  const loc = useLocation();

  return (
    <div class="drawer drawer-open w-full h-full">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col items-center justify-center p-4 bg-base-300 w-full h-full">
        {/* Page content here */}
        <Slot />
      </div>
      <div class="drawer-side">
        <label
          for="my-drawer-2"
          aria-label="close sidebar"
          class="drawer-overlay"
        ></label>
        <ul class="menu shadow-sm bg-base-100 text-base-content p-4 min-h-full">
          {/* Sidebar content here */}
          <li>
            <h3 class="menu-title">VIRA DASH</h3>
          </li>
          <li>
            <Link
              href="/users"
              class={{ active: loc.url.pathname.includes("users") }}
            >
              Users
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
});
