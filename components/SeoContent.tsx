import React from 'react';

const SeoContent: React.FC = () => {
  return (
    <section className="container mx-auto px-6 py-12 max-w-4xl text-zinc-400 text-sm md:text-base">
      <div className="bg-black/20 border border-white/5 rounded-2xl p-8 backdrop-blur-sm">
        <h2 className="text-2xl font-bold text-white mb-4">Mephisto Temp Mail Nedir?</h2>
        <p className="mb-4">
          Mephisto Temp Mail, kişisel e-posta adresinizi spam, reklam ve istenmeyen iletilerden korumanızı sağlayan 
          <strong>ücretsiz geçici e-posta</strong> servisidir. Kayıt olmanıza gerek kalmadan, tek tıkla anında 
          kullan at mail adresi oluşturabilir ve gelen kutunuzu temiz tutabilirsiniz.
        </p>

        <h3 className="text-xl font-bold text-white mb-3 mt-6">Neden Geçici Mail Kullanmalısınız?</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Gizlilik:</strong> Gerçek kimliğinizi ve e-postanızı paylaşmak zorunda kalmazsınız.</li>
          <li><strong>Spam Koruması:</strong> Bir siteye üye olurken Mephisto adresinizi kullanın, spam maillerden kurtulun.</li>
          <li><strong>Güvenlik:</strong> Şüpheli sitelerde doğrulama yaparken kişisel verilerinizi riske atmazsınız.</li>
          <li><strong>Hız:</strong> Saniyeler içinde adresiniz hazır, bekleme süresi yok.</li>
        </ul>

        <h3 className="text-xl font-bold text-white mb-3 mt-6">Nasıl Çalışır?</h3>
        <p>
          Siteye girdiğiniz anda sistem size otomatik olarak benzersiz bir e-posta adresi atar. Bu adresi kopyalayıp 
          dilediğiniz sitede kullanabilirsiniz. Gelen mailler anında Mephisto arayüzünde belirir. İşiniz bittiğinde 
          sayfayı kapatın veya "Delete" butonuna basarak adresi imha edin.
        </p>
      </div>
    </section>
  );
};

export default SeoContent;
