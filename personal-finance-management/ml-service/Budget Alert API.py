@app.post("/alert")

def alert(data:AlertRequest):

 result = alert_model.predict(

 [[

  data.budget,

  data.spent

 ]]

 )

 return {

  "budget_alert":

  bool(result[0])

 }