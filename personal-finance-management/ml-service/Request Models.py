class ForecastRequest(BaseModel):
    day:int

class OverspendRequest(BaseModel):
    income:float
    expense:float

class AlertRequest(BaseModel):
    budget:float
    spent:float