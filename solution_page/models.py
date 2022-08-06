from tabnanny import verbose
from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
from tinymce import models as tinymce_models


class NameIcon(models.Model):
    name = models.CharField(max_length=50)
    def __str__(self):
        return self.name

class UploadVid(models.Model):
    title = models.CharField(max_length=200)
    url = models.CharField(max_length=200)
    img = models.ImageField(upload_to='images')
    quote = models.CharField(max_length=200)
    name = models.CharField(max_length=200)
    class Meta:
        db_table = "Upload Vid"
        get_latest_by = ['title', 'url', 'img', 'quote', 'name']
        verbose_name_plural = 'Thế kỉ 21 - Trẻ em cần học lập trình'

class WhyChooseUs(models.Model):
    title  = models.CharField(max_length=200)
    content = tinymce_models.HTMLField()
    img = models.ImageField(upload_to='images')
    order = models.IntegerField(
        default=0,
        )
    class Meta:
        verbose_name_plural = 'Vì sao chọn Teky'

class LearningPath(models.Model):
    img = models.ImageField(upload_to='images')
    class Meta:
        verbose_name_plural = 'Lộ trình học tập'
        get_latest_by = ['img']

class Technology(models.Model):
    name = models.CharField(max_length=200)
    img = models.ImageField(upload_to='images')
    order = models.IntegerField(
        default=0,
    )
    def __str__(self):
        return self.name
    class Meta:
        verbose_name_plural = 'Nền tảng công nghệ'

class TechnologyList(models.Model):
    technology = models.ForeignKey(Technology, on_delete=models.CASCADE, related_name = 'technologylist')
    content = models.CharField(max_length=200) 
    def __str__(self):
        return self.content 

class Method(models.Model):
    name = models.CharField(max_length=200)
    content = tinymce_models.HTMLField()
    img = models.ImageField(upload_to='images')
    order = models.IntegerField(
        default=0,
        )
    class Meta:
        verbose_name_plural = 'Phương pháp sư phạm'

class Adviser(models.Model):
    title = models.CharField(max_length=200)
    position = models.CharField(max_length=200)
    img = models.ImageField(upload_to='images')
    order = models.IntegerField(
        default=0,
    )
    class Meta:
        verbose_name_plural = 'Đội ngũ cố vấn'

class AdviserLink(models.Model):
    title = models.ForeignKey(Adviser, on_delete=models.CASCADE, related_name='adviserlink')
    url = models.CharField(max_length=200)
    logo = models.ForeignKey(NameIcon, on_delete=models.CASCADE)

class AdviserLogo(models.Model):
    description = models.CharField(max_length=200)
    logo = models.ImageField(upload_to='images')
    order = models.IntegerField(
        default=0,
    )
    class Meta:
        verbose_name_plural = 'Đội ngũ chuyên gia đối tác'

class Certificate(models.Model):
    titlename = tinymce_models.HTMLField()
    title = tinymce_models.HTMLField()
    img = models.ImageField(upload_to='images')
    point = models.IntegerField(
        default=0,
        validators=[
            MaxValueValidator(100),
            MinValueValidator(0),
        ])
    maincontent = tinymce_models.HTMLField()
    intro = tinymce_models.HTMLField()
    subcontent = tinymce_models.HTMLField()
    logo = models.ImageField(upload_to='images')
    class Meta:
        verbose_name_plural = 'Chứng nhận chất lượng quốc tế'

class Award(models.Model):
    img = models.ImageField(upload_to='images')
    title = models.CharField(max_length=200)
    description = models.CharField(max_length=200)
    Detail = models.CharField(max_length=200)
    order = models.IntegerField(
        default=0,
    )
    class Meta:
        verbose_name_plural = 'Thành tích & giải thưởng'

class Course(models.Model):
    img = models.ImageField(upload_to='images')
    price = models.IntegerField(default=0)
    title = models.CharField(max_length=200)
    vote = models.IntegerField(default=0)
    rating = models.FloatField(
        default=0,
        validators=[
            MaxValueValidator(5.0),
            MinValueValidator(0),
        ])
    order = models.IntegerField(
        default=0,
    )
    class Meta:
        verbose_name_plural = 'Khóa học công nghệ'

class Project(models.Model):
    title = models.CharField(max_length=200)
    img = models.ImageField(upload_to='images')
    usercount = models.IntegerField(default=0)
    order = models.IntegerField(default=0)
    class Meta:
        verbose_name_plural = 'Dự án tiêu biểu'


class ProjectIcon(models.Model):
    Project = models.ForeignKey(Project, on_delete= models.CASCADE, related_name='projecticon')
    NameIcon = models.ForeignKey(NameIcon, on_delete=models.CASCADE, related_name='nameicon')

class Parent(models.Model):
    name = models.CharField(max_length=200)
    avatar = models.ImageField(upload_to='images')
    studentname = models.CharField(max_length=200)
    content = models.CharField(max_length=200)
    order = models.IntegerField(
        default=0,
    )
    class Meta:
        verbose_name_plural = 'Học sinh, phụ huynh nói gì về Teky'

class Media(models.Model):
    img = models.ImageField(upload_to='images')
    logo = models.ImageField(upload_to='images')
    title = models.CharField(max_length=200)
    order = models.IntegerField(
        default=0,
    )
    class Meta:
        verbose_name_plural = 'Báo chí nói về chúng tôi'

class WhyLearn(models.Model):
    thumb = models.ImageField(upload_to='images')
    title = models.CharField(max_length=200)
    description = models.CharField(max_length=200)
    rating = models.FloatField(
        default=0,
        validators=[
            MaxValueValidator(5.0),
            MinValueValidator(0),
        ])
    subdes = models.CharField(max_length=100)
    vote = models.IntegerField(default=0)
    order = models.IntegerField(default=0)
    count = models.IntegerField(default = 0)
    discount = models.IntegerField(default = 0)
    class Meta:
        verbose_name_plural = 'Trẻ em cần học lập trình'

class UserIcon(models.Model):
    name = models.ForeignKey(WhyLearn, on_delete=models.CASCADE, related_name='usercount')
    img = models.ImageField(upload_to='images')

class User(models.Model):
    img = models.ImageField(upload_to='images')
    order = models.IntegerField(default=0)
    class Meta:
        verbose_name_plural = 'Thư viện hình ảnh'

class ModalRegister(models.Model):
    student_name = models.CharField(max_length=100)
    date_of_birth = models.SmallIntegerField(
        default=2010,
        validators=[
            MaxValueValidator(2016),
            MinValueValidator(2010),
        ])
    parent_name = models.CharField(max_length=100)
    email = models.EmailField(max_length=50)
    phone_number = models.CharField(max_length=20)
