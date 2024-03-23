input.onButtonPressed(Button.A, function () {
    PlanetX_AILens.learnObject(PlanetX_AILens.learnID.ID1)
})
input.onButtonPressed(Button.AB, function () {
    PlanetX_AILens.learnObject(PlanetX_AILens.learnID.ID3)
})
input.onButtonPressed(Button.B, function () {
    PlanetX_AILens.learnObject(PlanetX_AILens.learnID.ID2)
})
PlanetX_AILens.initModule()
PlanetX_AILens.switchfunc(PlanetX_AILens.FuncList.Things)
PlanetX_AILens.delASRLearn()
PlanetX_AILens.ClearlearnObject()
basic.forever(function () {
    PlanetX_AILens.cameraImage()
    if (PlanetX_AILens.objectCheck(PlanetX_AILens.learnID.ID1)) {
        neZha.setMotorSpeed(neZha.MotorList.M1, 15)
        neZha.setMotorSpeed(neZha.MotorList.M4, 15)
        basic.showNumber(1)
    } else if (PlanetX_AILens.objectCheck(PlanetX_AILens.learnID.ID2)) {
        neZha.setMotorSpeed(neZha.MotorList.M1, 0)
        neZha.setMotorSpeed(neZha.MotorList.M4, 0)
        PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J2, true)
        PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J3, false)
        basic.showNumber(2)
    } else if (PlanetX_AILens.objectCheck(PlanetX_AILens.learnID.ID3)) {
        neZha.setMotorSpeed(neZha.MotorList.M1, 0)
        neZha.setMotorSpeed(neZha.MotorList.M4, 15)
        basic.showNumber(3)
    }
})
