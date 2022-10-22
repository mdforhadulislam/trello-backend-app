const accountDaitelsHendler = require("../controller/account/accountDaitelsHendler");
const accountDeleteHendler = require("../controller/account/accountDeleteHendler");
const accountUpdateHendler = require("../controller/account/accountUpdateHendler");
const tokenToGetAccountDaitelsHendler = require("../controller/account/tokenToGetAccountDaitelsHendler");

const router = require("express").Router();

router
  .route("/:username")
  .get(accountDaitelsHendler)
  .put(accountUpdateHendler)
  .delete(accountDeleteHendler);

router.get("/token/:token",tokenToGetAccountDaitelsHendler)

module.exports = router;
