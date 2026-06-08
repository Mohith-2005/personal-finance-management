from fastapi import FastAPI

from pydantic import BaseModel

import joblib

app = FastAPI()

forecast_model = joblib.load(
 "models/forecast_model.pkl"
)

overspend_model = joblib.load(
 "models/overspend_model.pkl"
)

alert_model = joblib.load(
 "models/alert_model.pkl"
)