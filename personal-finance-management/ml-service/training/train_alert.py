import pandas as pd

import joblib

from sklearn.linear_model import LogisticRegression

df = pd.read_csv(
 "datasets/alerts.csv"
)

X = df[
 ["budget","spent"]
]

y = df["label"]

model = LogisticRegression()

model.fit(X,y)

joblib.dump(

 model,

 "models/alert_model.pkl"

)

print("Saved")