const app = require("express")();
const cassandra = require("cassandra-driver");
const userRoutes = require("./user.route");
const authRoutes = require("./auth.route");
const router = express.Router();

const client = new cassandra.Client({
  cloud: { secureConnectBundle: "./secure-connect-hackgt.zip" },
  credentials: { username: "dev", password: "devpassword" },
  keyspace: "hackGTkeyspace",
});

/**
 * GET v1/status
 */
router.get("/status", (req, res) => res.send("OK"));

/**
 * GET v1/docs
 */
router.use("/docs", express.static("docs"));

router.use("/users", userRoutes);
router.use("/auth", authRoutes);

module.exports = router;
