from typing import Union
from fastapi import Body, FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from enum import Enum
# import uvicorn
# import asyncio


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)


class ModelName(str, Enum):
    alexnet = "alexnet"
    resnet = "resnet"
    lenet = "lenet"


class Item(BaseModel):
    name: str
    price: float
    is_offer: Union[bool, None] = None


@app.get("/")
def read_root():
    arr = [1, 2, 3, 4, 5, 6]

    for item in arr:
        print(item)

    return {"Hello": "World"}


@app.get("/items/{item_id}", summary="元素", description="获取元素详情")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}


@app.put("/items/{item_id}")
def update_item(item_id: int, item: Item):
    arr = [1, 2, 3, 4, 5, 6]
    new_arr = []
    for i in arr:
        new_arr.append({"id": i, "item_name": item.name, "item_id": item_id})

    # return {"item_name": item.name, "item_id": item_id}
    return new_arr


@app.get("/models/{model_name}")
def get_model(model_name: ModelName):
    if model_name is ModelName.alexnet:
        return {"model_name": model_name, "message": "Deep Learning FTW!"}

    if model_name.value == "lenet":
        return {"model_name": model_name, "message": "LeCNN all the images"}

    return {"model_name": model_name, "message": "Have some residuals"}


arr = [
    {
        "id": "123231",
        "title": "ddawdaw",
        "age": 21
    },
    {
        "id": "432213",
        "title": "fergfr",
        "age": 53
    },
    {
        "id": "432421",
        "title": "greg",
        "age": 522
    },
]


@app.get('/books')
def get_books():
    return arr


@app.get('/book/{book_id}')
def get_book(book_id: str, book_title: str):
    for book in arr:
        if book.get("id") == book_id and book.get("title") == book_title:
            return book


@app.post('/book/')
def create_book(new_book=Body()):
    arr.append(new_book)


# if __name__ == "__main__":
    # uvicorn main:app --reload
    # uvicorn.run("example:app", host="127.0.0.1", port=8000, log_level="info")
