@app.post("/overspend")

def overspend(data:OverspendRequest):

 result = overspend_model.predict(

 [[

  data.income,

  data.expense

 ]]

 )

 return {

  "overspending":

  bool(result[0])

 }