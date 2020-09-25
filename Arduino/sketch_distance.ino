int TRIG = 16;
int ECHO = 17;

int LED1 = 23;

void setup() {
  // put your setup code here, to run once:
  pinMode(TRIG, OUTPUT);
  pinMode(ECHO, INPUT);
  pinMode(LED1, OUTPUT);
  Serial.begin(115200);
}

int i=0;
void loop() {
  // put your main code here, to run repeatedly:

  digitalWrite(TRIG, LOW);
  digitalWrite(ECHO, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG, LOW);

  unsigned long duration = pulseIn(ECHO, HIGH);

  float distance = duration / 29.0 / 2.0;

  if(distance < 10){
    digitalWrite(LED1, HIGH);
  }
  else{
    digitalWrite(LED1, LOW);
  }
  delay(200);
}
