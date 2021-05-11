import * as React from "react";
import * as ReactDOM from "react-dom";

import { loadContext } from "@utils/env";
import { loadFonts } from "@utils/fonts";
import { logger } from "@utils/logger";
import { setupPnp } from "@utils/odata";

import { Main } from "@components/Main";

loadContext()
	.then(() => {
		// setupPnp();
		loadFonts();

		const el = document.getElementById("testapp-cewp-container");
		ReactDOM.render(<Main />, el);
	})
	.catch(logger.error);
