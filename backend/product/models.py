from django.db import models

class Product(models.Model):
    CATEGORY = (('eletroportateis', 'Eletroportáteis'),
                ('moveis', 'Móveis'),
                ('geladeiras','Geladeiras'),
                ('smartphones', 'Smartphones'),
                ('eletronicos','Eletrônicos'))
    name = models.CharField(max_length=255)
    description = models.CharField(max_length=255, blank=True, null=True)
    color = models.CharField(max_length=255, blank=True)
    category = models.CharField(max_length=40, choices=CATEGORY)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    promotional_price = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)


    def save(self, *args, **kwargs):
        """
        Antes de Salvar os produtos Verifica se tem o desconto
        e se ele ta equivalente a tabela de descontos 
        """
        if self.promotional_price is None and self.price is not None:
            DISCOUNTS = {
                'smartphones': 2.55,
                'moveis': 3.0,
                'eletronicos': 4.3,
                'eletroportateis': 5.0,
                'geladeiras': 7.5,
            }

            percentage = DISCOUNTS.get(self.category, 0) 
            discount = (percentage / 100) * float(self.price)
            self.promotional_price = float(self.price) - discount
            print(self.promotional_price)
        
        super(Product, self).save(*args, **kwargs)


