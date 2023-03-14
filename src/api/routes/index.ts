import express from "express";
import RoutineController from "./../modules/self_care/selfCareController.js";

const router = express.Router();

const routineController = new RoutineController();

router.post(
  "/routines",
  routineController.createRoutine.bind(routineController)
);
router.get(
  "/routines/:id",
  routineController.getRoutineById.bind(routineController)
);
router.patch(
  "/routines/:id",
  routineController.updateRoutine.bind(routineController)
);
router.delete(
  "/routines/:id",
  routineController.deleteRoutine.bind(routineController)
);

export default router;
