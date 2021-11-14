from fastapi import APIRouter
from ..models.item import Item


router = APIRouter()


@router.get()
def get_all_items():
    pass


@router.get()
def get_item_by_id():
    pass


@router.post()
def create_item(item: Item):
    pass


@router.delete()
def remove_item(id: int):
    pass


@router.patch()
def update_item():
    pass
