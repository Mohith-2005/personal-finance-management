import pandas as pd

import joblib

from sklearn.tree import DecisionTreeClassifier

df = pd.read_csv(
 "datasets/overspending.csv"
)

X = df[
 ["income","expense"]
]

y = df["label"]

model = DecisionTreeClassifier()

model.fit(X,y)

joblib.dump(

 model,

 "models/overspend_model.pkl"

)

print("Saved")