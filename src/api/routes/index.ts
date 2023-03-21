import express from "express";
import RoutineController from "./../modules/self_care/selfCareController.js";

const router = express.Router();

const routineController = new RoutineController();

router.post(
  "/routines",
  routineController.createRoutine.bind(routineController)
);

router.get(
  "/routineByDate/:date",
  routineController.getRoutineByDate.bind(routineController)
);

// TODO: check and remove
router.patch(
  "/routines/:id",
  routineController.updateRoutine.bind(routineController)
);
// TODO: check and remove
router.delete(
  "/routines/:id",
  routineController.deleteRoutine.bind(routineController)
);

router.get(
  "/allroutines",
  routineController.allRoutine.bind(routineController)
);

router.get(
  "/allDatesFromDb",
  routineController.getAllDatesFromDb.bind(routineController)
);

export default router;
