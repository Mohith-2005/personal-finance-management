@app.post("/forecast")

def forecast(data:ForecastRequest):

 prediction = forecast_model.predict(

  [[data.day]]

 )

 return {

  "predicted_expense":

  float(prediction[0])

 }