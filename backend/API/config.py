from db.config import SessionLocal
from fastapi import APIRouter

async def create_session():
    with SessionLocal() as session:
        yield session

class Versions:
    v1 = 'v1/'

def router(router: APIRouter, version: str, prefix: str, tag: str):
    return (router, f'/api/{prefix}', tag)