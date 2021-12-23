import graphene
from fullstack.photo.schema import Query as fullstackQuery

class Query(fullstackQuery, graphene.ObjectType):
    pass


