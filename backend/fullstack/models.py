from django.db import models


class Post(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=32, db_index=True, blank=True, help_text="제목")
    contents = models.TextField(db_index=True, blank=True, help_text="내용")
    image = models.CharField(max_length=500, db_index=True, blank=True, help_text="이미지URL")
    writer = models.CharField(max_length=32, db_index=True, help_text="작성자")
    ctime = models.IntegerField(db_index=True, blank=True, null=True, help_text="생성일시")

