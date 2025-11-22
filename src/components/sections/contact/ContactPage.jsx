"use client"
import { useState } from "react"
import { FaInstagram, FaTiktok } from "react-icons/fa"

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        projectType: "website"
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState(null) // 'success' or 'error'
    const [errorMessage, setErrorMessage] = useState("")

    // Ganti dengan nomor WhatsApp kalian (format: 628xxxxxxxxxx)
    const whatsappNumber = "6285188160217"

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    // Function untuk kirim WhatsApp dengan template
    const handleWhatsApp = () => {
        const message = `Halo Fasya Dev! 👋

Saya tertarik untuk berdiskusi tentang project:

📋 *Detail Project:*
Nama: ${formData.name || '[Nama Anda]'}
Email: ${formData.email || '[Email Anda]'}
No. HP: ${formData.phone || '[No. HP Anda]'}

🎯 *Jenis Project:* ${formData.projectType === 'website' ? 'Starter' : formData.projectType === 'webapp' ? 'Professional' : formData.projectType === 'mobile' ? 'Enterprise' : 'Paket Custom'}

📝 *Subject:* ${formData.subject || '[Subject Project]'}

💬 *Detail Project:*
${formData.message || '[Ceritakan detail project Anda]'}

Terima kasih! 🙏`

        const encodedMessage = encodeURIComponent(message)
        window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank')
    }

    // Function untuk kirim ke Supabase
    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus(null)
        setErrorMessage("")

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            })

            const result = await res.json()

            if (res.ok) {
                setSubmitStatus('success')
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    subject: "",
                    message: "",
                    projectType: "website"
                })

                // Reset status after 7 seconds
                setTimeout(() => setSubmitStatus(null), 7000)
            } else if (res.status === 429) {
                // Rate limit exceeded
                setSubmitStatus('error')
                setErrorMessage(result.error || "Terlalu banyak percobaan. Mohon tunggu sebentar.")
                setTimeout(() => {
                    setSubmitStatus(null)
                    setErrorMessage("")
                }, 7000)
            } else {
                setSubmitStatus('error')
                setErrorMessage(result.error || "Gagal mengirim pesan. Silakan coba lagi.")
                setTimeout(() => {
                    setSubmitStatus(null)
                    setErrorMessage("")
                }, 7000)
            }
        } catch (error) {
            console.error('Error:', error)
            setSubmitStatus('error')
            setErrorMessage("Tidak dapat terhubung ke server. Periksa koneksi Anda.")
            setTimeout(() => {
                setSubmitStatus(null)
                setErrorMessage("")
            }, 7000)
        } finally {
            setIsSubmitting(false)
        }
    }

    // Quick templates untuk WhatsApp
    const quickTemplates = [
        {
            icon: "🌐",
            title: "Konsultasi Website",
            desc: "Ingin membuat website baru",
            message: "Halo! Saya ingin konsultasi untuk pembuatan website. Bisa dibantu?"
        },
        {
            icon: "⚡",
            title: "Web Application",
            desc: "Butuh web app custom",
            message: "Hi! Saya butuh web application custom. Bisa diskusi lebih lanjut?"
        },
        {
            icon: "🔧",
            title: "Maintenance",
            desc: "Butuh maintenance website",
            message: "Halo! Website saya butuh maintenance dan update. Bisa bantu?"
        },
        {
            icon: "💬",
            title: "Tanya-tanya",
            desc: "Mau tanya dulu",
            message: "Hi Fasya Dev! Saya mau tanya-tanya dulu seputar jasa kalian."
        }
    ]

    const handleQuickTemplate = (message) => {
        const encodedMessage = encodeURIComponent(message)
        window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank')
    }

    const socialMedia = [
        {
            icon: FaInstagram,
            name: "Instagram",
            username: "@fasyadev31",
            link: "https://instagram.com/fasyadev31",
            color: "from-pink-600 to-purple-500"
        },
        {
            icon: FaTiktok,
            name: "Twitter",
            username: "@fasyadev31",
            link: "https://tiktok.com/@fasyadev31",
            color: "from-sky-500 to-blue-400"
        },
    ]

    const getProjectTypeLabel = (type) => {
        const labels = {
            'website': 'Starter',
            'webapp': 'Professional',
            'mobile': 'Enterprise',
            'other': 'Paket Custom'
        }
        return labels[type] || type
    }

    return (
        <section className="min-h-screen py-32 px-6 md:px-16 lg:px-20 bg-gradient-to-b from-bg via-primary/5 to-bg">
            <div className="container mx-auto max-w-7xl">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <div className="inline-block">
                        <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold">
                            📞 Hubungi Kami
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text">
                        Mari Berdiskusi
                    </h1>
                    <p className="text-lg md:text-xl text-text/70">
                        Punya project atau pertanyaan? Kami siap membantu mewujudkan ide digital Anda!
                    </p>
                </div>

                {/* Quick Contact via WhatsApp Templates */}
                <div className="mb-16">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {quickTemplates.map((template, index) => (
                            <button
                                key={index}
                                onClick={() => handleQuickTemplate(template.message)}
                                className="group relative bg-bg border-2 border-text/10 rounded-2xl p-6 hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-xl text-left"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />

                                <div className="relative z-10 space-y-3">
                                    <div className="text-4xl mb-2">{template.icon}</div>
                                    <h3 className="font-bold text-text text-lg">{template.title}</h3>
                                    <p className="text-sm text-text/60">{template.desc}</p>
                                    <div className="text-primary font-semibold text-sm group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                                        Chat Sekarang →
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Main Contact Form & WhatsApp Preview */}
                <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
                    {/* Contact Form */}
                    <div className="bg-bg border-2 border-text/10 rounded-3xl p-8 md:p-10">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-2xl">
                                📧
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-text">Kirim Pesan</h2>
                                <p className="text-sm text-text/60">Isi form dan kirim langsung</p>
                            </div>
                        </div>

                        {/* Success/Error Message */}
                        {submitStatus === 'success' && (
                            <div className="mb-6 p-4 bg-green-500/10 border-2 border-green-500 rounded-xl animate-slide-down">
                                <p className="text-green-600 font-semibold">✅ Pesan berhasil dikirim! Kami akan segera menghubungi Anda.</p>
                            </div>
                        )}
                        {submitStatus === 'error' && (
                            <div className="mb-6 p-4 bg-red-500/10 border-2 border-red-500 rounded-xl animate-slide-down">
                                <p className="text-red-600 font-semibold">❌ {errorMessage}</p>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid md:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-text font-semibold mb-2 text-sm">
                                        Nama Lengkap *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        disabled={isSubmitting}
                                        className="w-full px-4 py-3 bg-bg border-2 border-text/10 rounded-xl text-text focus:border-primary focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label className="block text-text font-semibold mb-2 text-sm">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        disabled={isSubmitting}
                                        className="w-full px-4 py-3 bg-bg border-2 border-text/10 rounded-xl text-text focus:border-primary focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-text font-semibold mb-2 text-sm">
                                    No. WhatsApp
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    disabled={isSubmitting}
                                    className="w-full px-4 py-3 bg-bg border-2 border-text/10 rounded-xl text-text focus:border-primary focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                    placeholder="08123456789"
                                />
                            </div>

                            <div>
                                <label className="block text-text font-semibold mb-2 text-sm">
                                    Jenis Paket *
                                </label>
                                <select
                                    name="projectType"
                                    value={formData.projectType}
                                    onChange={handleChange}
                                    required
                                    disabled={isSubmitting}
                                    className="w-full px-4 py-3 bg-bg border-2 border-text/10 rounded-xl text-text focus:border-primary focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <option value="website">Starter</option>
                                    <option value="webapp">Professional</option>
                                    <option value="mobile">Enterprise</option>
                                    <option value="other">Paket Custom</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-text font-semibold mb-2 text-sm">
                                    Subject *
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    disabled={isSubmitting}
                                    className="w-full px-4 py-3 bg-bg border-2 border-text/10 rounded-xl text-text focus:border-primary focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                    placeholder="Konsultasi Pembuatan Website"
                                />
                            </div>

                            <div>
                                <label className="block text-text font-semibold mb-2 text-sm">
                                    Pesan * <span className="text-text/40 font-normal">(min. 10 karakter)</span>
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    disabled={isSubmitting}
                                    rows={5}
                                    className="w-full px-4 py-3 bg-bg border-2 border-text/10 rounded-xl text-text focus:border-primary focus:outline-none transition-colors resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                                    placeholder="Ceritakan detail project yang Anda inginkan..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-semibold hover:scale-105 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Mengirim...
                                    </>
                                ) : (
                                    <>
                                        📧 Kirim Pesan
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                    {/* WhatsApp Preview */}
                    <div className="bg-bg border-2 border-text/10 rounded-3xl p-8 md:p-10">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-2xl">
                                💬
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-text">Via WhatsApp</h2>
                                <p className="text-sm text-text/60">Preview pesan sebelum kirim</p>
                            </div>
                        </div>

                        {/* WhatsApp Message Preview */}
                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-6 mb-6 border-2 border-green-200 dark:border-green-800">
                            <div className="text-sm text-text/80 space-y-2 font-mono whitespace-pre-wrap break-words">
                                <p className="font-bold">Halo Fasya Dev! 👋</p>
                                <p>Saya tertarik untuk berdiskusi tentang project:</p>
                                <p className="font-bold">📋 Detail Project:</p>
                                <p>Nama: {formData.name || '[Nama Anda]'}</p>
                                <p>Email: {formData.email || '[Email Anda]'}</p>
                                <p>No. HP: {formData.phone || '[No. HP Anda]'}</p>
                                <p className="font-bold">🎯 Jenis Project: {getProjectTypeLabel(formData.projectType)}</p>
                                <p className="font-bold">📝 Subject: {formData.subject || '[Subject Project]'}</p>
                                <p className="font-bold">💬 Detail Project:</p>
                                <p>{formData.message || '[Ceritakan detail project Anda]'}</p>
                                <p>Terima kasih! 🙏</p>
                            </div>
                        </div>

                        <button
                            onClick={handleWhatsApp}
                            className="w-full px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold hover:scale-105 transition-all shadow-lg flex items-center justify-center gap-2"
                        >
                            <span className="text-xl">💬</span>
                            Kirim via WhatsApp
                        </button>

                        <p className="text-xs text-text/60 text-center mt-4">
                            * Anda bisa edit pesan sebelum mengirim
                        </p>
                    </div>
                </div>

                {/* Social Media */}
                <div className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-text text-center mb-8">
                        Ikuti Kami di Social Media
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-2 gap-6 max-w-4xl mx-auto items-center justify-center ">
                        {socialMedia.map((social, index) => (
                            <a
                                key={index}
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative bg-bg border-2 border-text/10 rounded-2xl p-6 hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-xl text-center"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />

                                <div className="relative z-10 space-y-2">
                                    <div className="text-4xl mb-4">
                                        {social.icon && <social.icon size={40} className="text-2xl text-text mx-auto" />}
                                    </div>
                                    <h3 className="font-bold text-text">{social.name}</h3>
                                    <p className="text-xs text-text/60">{social.username}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Direct Email Link */}
                <div className="text-center max-w-2xl mx-auto bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 border-2 border-primary/20">
                    <h3 className="text-xl font-bold text-text mb-3">Atau Email Langsung Ke:</h3>
                    <a
                        href="mailto:fasyadev31@gmail.com"
                        className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:scale-105 transition-transform inline-block"
                    >
                        fasyadev31@gmail.com
                    </a>
                </div>
            </div>

            <style jsx>{`
                @keyframes slide-down {
                    from {
                        transform: translateY(-10px);
                        opacity: 0;
                    }
                    to {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }
                .animate-slide-down {
                    animation: slide-down 0.3s ease-out;
                }
            `}</style>
        </section>
    )
}