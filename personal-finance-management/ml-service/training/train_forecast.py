import pandas as pd

from sklearn.linear_model import LinearRegression

import joblib

df = pd.read_csv(
    "datasets/expenses.csv"
)

X = df[["day"]]

y = df["expense"]

model = LinearRegression()

model.fit(X,y)

joblib.dump(
    model,
    "models/forecast_model.pkl"
)

print("Forecast Model Saved")