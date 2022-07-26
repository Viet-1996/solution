from tabnanny import verbose
from tkinter import CASCADE
from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
from tinymce import models as tinymce_models
from django.utils.safestring import mark_safe

class NameIcon(models.Model):
    name = models.CharField(max_length=50)
    def __str__(self):
        return self.name
    class Meta:
        verbose_name_plural = 'Icon'

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
    @property
    def admin_photo(self):
        return mark_safe('<img src="{}" width="200"/>'.format(self.img.url))


class WhyChooseUs(models.Model):
    title  = models.CharField(max_length=200)
    content = tinymce_models.HTMLField()
    img = models.ImageField(upload_to='images')
    my_order = models.PositiveIntegerField(
        default=0,
        blank=False,
        null=False,
    )
    class Meta:
        verbose_name_plural = 'Vì sao chọn Teky'
        ordering = ['my_order']
    @property
    def admin_photo(self):
        return mark_safe('<img src="{}" width="100"/>'.format(self.img.url))
    def admin_content(self):
        return mark_safe(self.content)

class LearningPath(models.Model):
    img = models.ImageField(upload_to='images')
    my_order = models.PositiveIntegerField(
        default=0,
        blank=False,
        null=False,
    )
    class Meta:
        verbose_name_plural = 'Lộ trình học tập'
        get_latest_by = ['img']
        ordering = ['my_order']
    @property
    def admin_photo(self):
        return mark_safe('<img src="{}" width="200"/>'.format(self.img.url))

class Technology(models.Model):
    name = models.CharField(max_length=200)
    img = models.ImageField(upload_to='images')
    my_order = models.PositiveIntegerField(
        default=0,
        blank=False,
        null=False,
    )
    def __str__(self):
        return self.name
    class Meta:
        verbose_name_plural = 'Nền tảng công nghệ'
        ordering = ['my_order']
    @property
    def admin_photo(self):
        return mark_safe('<img src="{}" width="200"/>'.format(self.img.url))

class TechnologyList(models.Model):
    technology = models.ForeignKey(Technology, on_delete=models.CASCADE, related_name = 'technologylist')
    content = models.CharField(max_length=200) 
    my_order = models.PositiveIntegerField(
        default=0,
        blank=False,
        null=False,
    )
    class Meta:
        ordering = ['my_order']
    def __str__(self):
        return self.content 

class Method(models.Model):
    name = models.CharField(max_length=200)
    content = tinymce_models.HTMLField()
    img = models.ImageField(upload_to='images')
    my_order = models.PositiveIntegerField(
        default=0,
        blank=False,
        null=False,
    )
    class Meta:
        verbose_name_plural = 'Phương pháp sư phạm'
        ordering = ['my_order']
    @property
    def admin_photo(self):
        return mark_safe('<img src="{}" width="200"/>'.format(self.img.url))

class Adviser(models.Model):
    title = models.CharField(max_length=200)
    position = models.CharField(max_length=200)
    img = models.ImageField(upload_to='images')
    my_order = models.PositiveIntegerField(
        default=0,
        blank=False,
        null=False,
    )
    class Meta:
        verbose_name_plural = 'Đội ngũ cố vấn'
        ordering = ['my_order']
    @property
    def admin_photo(self):
        return mark_safe('<img src="{}" width="200"/>'.format(self.img.url))

class AdviserLink(models.Model):
    title = models.ForeignKey(Adviser, on_delete=models.CASCADE, related_name='adviserlink')
    url = models.CharField(max_length=200)
    logo = models.ForeignKey(NameIcon, on_delete=models.CASCADE)
    my_order = models.PositiveIntegerField(
        default=0,
        blank=False,
        null=False,
    )
    class Meta:
        ordering = ['my_order']

class AdviserLogo(models.Model):
    description = models.CharField(max_length=200)
    logo = models.ImageField(upload_to='images')
    my_order = models.PositiveIntegerField(
        default=0,
        blank=False,
        null=False,
    )
    class Meta:
        verbose_name_plural = 'Đội ngũ chuyên gia đối tác'
        ordering = ['my_order']
    @property
    def admin_photo(self):
        return mark_safe('<img src="{}" width="100"/>'.format(self.logo.url))

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
    @property
    def admin_img(self):
        return mark_safe('<img src="{}" width="200"/>'.format(self.img.url))
    def admin_logo(self):
        return mark_safe('<img src="{}" width="100"/>'.format(self.logo.url))
    def admin_titlename(self):
        return mark_safe(self.titlename)
    def admin_title(self):
        return mark_safe(self.title)
    def admin_maincontent(self):
        return mark_safe(self.maincontent)

class Award(models.Model):
    img = models.ImageField(upload_to='images')
    title = models.CharField(max_length=200)
    description = models.CharField(max_length=200)
    Detail = models.CharField(max_length=200)
    my_order = models.PositiveIntegerField(
        default=0,
        blank=False,
        null=False,
    )
    class Meta:
        verbose_name_plural = 'Thành tích & giải thưởng'
        ordering = ['my_order']
    @property
    def admin_photo(self):
        return mark_safe('<img src="{}" width="200"/>'.format(self.img.url))


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
    my_order = models.PositiveIntegerField(
        default=0,
        blank=False,
        null=False,
    )
    class Meta:
        verbose_name_plural = 'Khóa học công nghệ'
        ordering = ['my_order']
    @property
    def admin_photo(self):
        return mark_safe('<img src="{}" width="200"/>'.format(self.img.url))

class Project(models.Model):
    title = models.CharField(max_length=200)
    img = models.ImageField(upload_to='images')
    usercount = models.IntegerField(default=0)
    my_order = models.PositiveIntegerField(
        default=0,
        blank=False,
        null=False,
    )
    class Meta:
        verbose_name_plural = 'Dự án tiêu biểu'
        ordering = ['my_order']
    @property
    def admin_photo(self):
        return mark_safe('<img src="{}" width="50"/>'.format(self.img.url))

class ProjectIcon(models.Model):
    Project = models.ForeignKey(Project, on_delete= models.CASCADE, related_name='projecticon')
    NameIcon = models.ForeignKey(NameIcon, on_delete=models.CASCADE, related_name='nameicon')
    my_order = models.PositiveIntegerField(
        default=0,
        blank=False,
        null=False,
    )
    class Meta:
        ordering = ['my_order']

class Parent(models.Model):
    name = models.CharField(max_length=200)
    avatar = models.ImageField(upload_to='images')
    studentname = models.CharField(max_length=200)
    content = models.CharField(max_length=200)
    my_order = models.PositiveIntegerField(
        default=0,
        blank=False,
        null=False,
    )
    class Meta:
        verbose_name_plural = 'Học sinh, phụ huynh nói gì về Teky'
        ordering = ['my_order']
    @property
    def admin_photo(self):
        return mark_safe('<img src="{}" width="100"/>'.format(self.avatar.url))

class Media(models.Model):
    img = models.ImageField(upload_to='images')
    logo = models.ImageField(upload_to='images')
    title = models.CharField(max_length=200)
    my_order = models.PositiveIntegerField(
        default=0,
        blank=False,
        null=False,
    )
    class Meta:
        verbose_name_plural = 'Báo chí nói về chúng tôi'
        ordering = ['my_order']
    @property
    def admin_img(self):
        return mark_safe('<img src="{}" width="200"/>'.format(self.img.url))
    def admin_logo(self):
        return mark_safe('<img src="{}" width="200"/>'.format(self.logo.url))

class Color(models.Model):
    name = models.CharField(max_length=50)
    def __str__(self):
        return self.name
    

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
    my_order = models.PositiveIntegerField(
        default=0,
        blank=False,
        null=False,
    )
    count = models.IntegerField(default = 0)
    discount = models.IntegerField(default = 0)
    color = models.ForeignKey(Color, on_delete = models.CASCADE , related_name='color')
    class Meta:
        verbose_name_plural = 'Trẻ em cần học lập trình'
        ordering = ['my_order']
    @property
    def admin_photo(self):
        return mark_safe('<img src="{}" width="200"/>'.format(self.thumb.url))

class UserIcon(models.Model):
    name = models.ForeignKey(WhyLearn, on_delete=models.CASCADE, related_name='usercount')
    img = models.ImageField(upload_to='images')
    my_order = models.PositiveIntegerField(
        default=0,
        blank=False,
        null=False,
    )
    class Meta:
        ordering = ['my_order']
    @property
    def admin_photo(self):
        return mark_safe('<img src="{}" width="30"/>'.format(self.img.url))

class User(models.Model):
    img = models.ImageField(upload_to='images')
    my_order = models.PositiveIntegerField(
        default=0,
        blank=False,
        null=False,
    )
    class Meta:
        verbose_name_plural = 'Thư viện hình ảnh'
        ordering = ['my_order']
    @property
    def admin_photo(self):
        return mark_safe('<img src="{}" width="200"/>'.format(self.img.url))

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
