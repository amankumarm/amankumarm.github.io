import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import Nav from "~/components/Nav";
import "./app.css";

export default function App() {
  return (
    <Router
      root={(props) => (
        <>
          <Suspense>
            <div class="flex h-svh items-center justify-center">
              <p>Will be right back!!</p>
            </div>
          </Suspense>
        </>
      )}
    ></Router>
  );
}
