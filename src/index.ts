import { App } from "@/main";
import { log } from "@/libs/logger";

App.listen(3000, async () => log.info());
