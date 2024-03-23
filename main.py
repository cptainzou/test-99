def on_button_pressed_a():
    PlanetX_AILens.learn_object(PlanetX_AILens.learnID.ID1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    PlanetX_AILens.learn_object(PlanetX_AILens.learnID.ID3)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    PlanetX_AILens.learn_object(PlanetX_AILens.learnID.ID2)
input.on_button_pressed(Button.B, on_button_pressed_b)

PlanetX_AILens.init_module()
PlanetX_AILens.switchfunc(PlanetX_AILens.FuncList.THINGS)
PlanetX_AILens.del_asr_learn()

def on_forever():
    neZha.set_motor_speed(neZha.MotorList.M1, 50)
    neZha.set_motor_speed(neZha.MotorList.M4, 50)
    PlanetX_AILens.camera_image()
    if PlanetX_AILens.object_check(PlanetX_AILens.learnID.ID1):
        neZha.set_motor_speed(neZha.MotorList.M1, 0)
        neZha.set_motor_speed(neZha.MotorList.M4, 0)
        basic.show_number(1)
    if PlanetX_AILens.object_check(PlanetX_AILens.learnID.ID2):
        neZha.set_motor_speed(neZha.MotorList.M1, 15)
        neZha.set_motor_speed(neZha.MotorList.M4, 15)
        basic.show_number(2)
    if PlanetX_AILens.object_check(PlanetX_AILens.learnID.ID3):
        neZha.set_motor_speed(neZha.MotorList.M1, 15)
        neZha.set_motor_speed(neZha.MotorList.M4, 15)
        basic.show_number(3)
basic.forever(on_forever)
