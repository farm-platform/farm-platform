from fastapi import FastAPI

# 创建 FastAPI 应用实例
app = FastAPI()

# 定义一个路由，访问根路径（/）时返回简单响应
@app.get("/")
def read_root():
    return {"Hello": "World"}