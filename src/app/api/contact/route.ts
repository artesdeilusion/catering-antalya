import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Enhanced server validation with Turkish error messages
    const required = ["name", "email", "phone", "eventType", "eventDate", "guestCount"];
    const fieldNames = {
      name: "Ad soyad",
      email: "E-posta",
      phone: "Telefon",
      eventType: "Etkinlik türü",
      eventDate: "Etkinlik tarihi",
      guestCount: "Misafir sayısı"
    };

    for (const k of required) {
      if (!body?.[k] || body[k].trim() === '') {
        return NextResponse.json({ 
          success: false, 
          error: `${fieldNames[k]} alanı gereklidir`,
          field: k
        }, { status: 400 });
      }
    }
    
    if (!/\S+@\S+\.\S+/.test(body.email)) {
      return NextResponse.json({ 
        success: false, 
        error: "Geçerli bir e-posta adresi giriniz",
        field: "email"
      }, { status: 400 });
    }

    // Check if email configuration is available
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("Email configuration missing");
      return NextResponse.json({ 
        success: false, 
        error: "E-posta servisi yapılandırılmamış. Lütfen daha sonra tekrar deneyin." 
      }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT || 465),
      secure: process.env.SMTP_SECURE !== "false", // 465=true, 587=false
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
        <div style="background-color: #dc2626; color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0;">
          <h2 style="margin: 0; font-size: 24px;">Likya Catering</h2>
          <p style="margin: 5px 0 0 0; font-size: 16px;">Yeni Teklif Talebi</p>
        </div>
        
        <div style="background-color: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h3 style="color: #1f2937; margin-bottom: 20px; border-bottom: 2px solid #dc2626; padding-bottom: 10px;">
            📋 Müşteri Bilgileri
          </h3>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 150px;">👤 Ad Soyad:</td>
              <td style="padding: 8px 0; color: #1f2937;">${body.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">📧 E-posta:</td>
              <td style="padding: 8px 0; color: #1f2937;">${body.email}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">📞 Telefon:</td>
              <td style="padding: 8px 0; color: #1f2937;">${body.phone}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">🏢 Şirket:</td>
              <td style="padding: 8px 0; color: #1f2937;">${body.company || "-"}</td>
            </tr>
          </table>

          <h3 style="color: #1f2937; margin-bottom: 20px; border-bottom: 2px solid #dc2626; padding-bottom: 10px;">
            🎉 Etkinlik Detayları
          </h3>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 150px;">🎯 Etkinlik Türü:</td>
              <td style="padding: 8px 0; color: #1f2937;">${body.eventType}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">📅 Etkinlik Tarihi:</td>
              <td style="padding: 8px 0; color: #1f2937;">${new Date(body.eventDate).toLocaleDateString('tr-TR')}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">👥 Misafir Sayısı:</td>
              <td style="padding: 8px 0; color: #1f2937;">${body.guestCount}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">💰 Bütçe Aralığı:</td>
              <td style="padding: 8px 0; color: #1f2937;">${body.budget || "-"}</td>
            </tr>
          </table>

          ${body.message ? `
          <h3 style="color: #1f2937; margin-bottom: 15px; border-bottom: 2px solid #dc2626; padding-bottom: 10px;">
            💬 Ek Bilgiler
          </h3>
          <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; border-left: 4px solid #dc2626;">
            <p style="margin: 0; color: #1f2937; line-height: 1.6;">${body.message.replace(/\n/g, "<br/>")}</p>
          </div>
          ` : ''}

          <div style="margin-top: 30px; padding: 20px; background-color: #fef3c7; border-radius: 8px; border-left: 4px solid #f59e0b;">
            <p style="margin: 0; color: #92400e; font-weight: 500;">
              ⏰ <strong>Önemli:</strong> Bu müşteriye en kısa sürede dönüş yapılması gerekiyor. 
              Müşteri e-posta adresi: <a href="mailto:${body.email}" style="color: #dc2626;">${body.email}</a>
            </p>
          </div>

          <div style="margin-top: 20px; text-align: center; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="margin: 0; color: #6b7280; font-size: 14px;">
              Bu e-posta Likya Catering web sitesinden otomatik olarak gönderilmiştir.
            </p>
          </div>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"Likya Catering" <${process.env.EMAIL_USER}>`,
      to: process.env.MAIL_TO || "info@likyacatering.com",
      subject: `🎉 Yeni Teklif Talebi - ${body.eventType} (${body.name})`,
      html,
      replyTo: body.email, // cevapla dediğinde müşteriye dönebilmek için
    });

    return NextResponse.json({ 
      success: true, 
      message: "Formunuz başarıyla gönderildi. En kısa sürede sizinle iletişime geçeceğiz." 
    });
  } catch (err) {
    console.error("Mail gönderme hatası:", err);
    
    // More specific error handling
    let errorMessage = "E-posta gönderilirken bir hata oluştu. Lütfen tekrar deneyin.";
    
    if (err instanceof Error) {
      if (err.message.includes("Invalid login")) {
        errorMessage = "E-posta kimlik doğrulama hatası. Lütfen sistem yöneticisi ile iletişime geçin.";
      } else if (err.message.includes("ECONNREFUSED")) {
        errorMessage = "E-posta sunucusuna bağlanılamıyor. Lütfen daha sonra tekrar deneyin.";
      } else if (err.message.includes("timeout")) {
        errorMessage = "E-posta gönderimi zaman aşımına uğradı. Lütfen tekrar deneyin.";
      }
    }
    
    return NextResponse.json({ 
      success: false, 
      error: errorMessage 
    }, { status: 500 });
  }
}
