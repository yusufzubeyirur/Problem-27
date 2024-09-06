import { Switch } from "@headlessui/react";
import { useState } from "react";

export default function Toggle() {
  const [enabled, setEnabled] = useState(true);

  return (
    <div className="p-8 flex justify-center">
      <Switch.Group as="div" className="flex items-center">
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className={classNames(
            enabled ? "bg-indigo-600" : "bg-gray-200",
            "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
          )}
        >
          <span
            aria-hidden="true"
            className={classNames(
              enabled ? "translate-x-5" : "translate-x-0",
              "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
            )}
          />
        </Switch>
        <Switch.Label as="span" className="ml-3 text-sm">
          <span className="font-medium text-gray-900">Yıllık fatura</span>{" "}
          <span className="text-gray-500">(%10 Tasarruf Edin)</span>
        </Switch.Label>
      </Switch.Group>
    </div>
  );
}

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
