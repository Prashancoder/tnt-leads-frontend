import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import {
  Phone,
  Mail,
  User,
  MessageSquare,
  CheckCircle,
} from "lucide-react";
import { apiPost } from "@/lib/api";
import { cn } from "@/lib/utils";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

type LeadFormVariant = "full" | "compact";

interface LeadFormProps {
  variant?: LeadFormVariant;
  transparent?: boolean;
  onSubmitted?: () => void;
}

const LeadForm = ({
  variant = "full",
  transparent = false,
  onSubmitted,
}: LeadFormProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      toast({
        title: "Name is required",
        description: "Please enter your full name",
        variant: "destructive",
      });
      return;
    }

    if (!formData.phone.trim()) {
      toast({
        title: "Phone number is required",
        description: "Please enter your phone number",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
await apiPost("https://tnt-leads-backend.onrender.com/api/leads", {
        ...formData,
        source: "website-landing",
      });

      toast({
        title: "Thank you for your interest! 🎉",
        description: "Our team will contact you within 24 hours.",
      });

      setFormData({ name: "", email: "", phone: "", message: "" });
      if (onSubmitted) onSubmitted();
    } catch {
      toast({
        title: "Submission failed",
        description: "Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const FormCard = (
    <Card
      className={cn(
        "rounded-2xl shadow-xl border bg-white/80 backdrop-blur-xl transition hover:shadow-2xl",
        transparent ? "bg-background/60 border-white/20" : ""
      )}
    >
      <CardHeader>
        <CardTitle
          className="text-2xl font-bold"
          style={{ color: "#224139" }}
        >
          Request Free Consultation
        </CardTitle>
        <CardDescription className="text-base text-gray-600">
          Fill out the form below and our team will reach out within 24 hours 🚀
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <Label htmlFor="name" className="flex items-center gap-2 font-semibold">
              <User size={16} />
              Full Name *
            </Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              placeholder="John Doe"
              required
              className="mt-2 rounded-lg focus:ring-2 focus:ring-[#224139]/60 transition"
            />
          </div>

          {/* Email */}
          <div>
            <Label htmlFor="email" className="flex items-center gap-2 font-semibold">
              <Mail size={16} />
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="your@email.com"
              className="mt-2 rounded-lg focus:ring-2 focus:ring-[#224139]/60 transition"
            />
          </div>

          {/* Phone */}
          <div>
            <Label htmlFor="phone" className="flex items-center gap-2 font-semibold">
              <Phone size={16} />
              Phone Number *
            </Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              placeholder="+91 9876543210"
              required
              className="mt-2 rounded-lg focus:ring-2 focus:ring-[#224139]/60 transition"
            />
          </div>

          {/* Message */}
          <div>
            <Label htmlFor="message" className="flex items-center gap-2 font-semibold">
              <MessageSquare size={16} />
              Your Requirements
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              placeholder="Budget, location preference, property type..."
              rows={4}
              className="mt-2 rounded-lg focus:ring-2 focus:ring-[#224139]/60 transition"
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 text-lg font-semibold rounded-lg text-white hover:opacity-90 transition relative overflow-hidden"
            style={{ backgroundColor: "#224139" }}
          >
            <span className="relative z-10">
              {isSubmitting ? "Submitting..." : "✨ Send My Request"}
            </span>
            <div className="absolute inset-0 bg-white/20 blur-md opacity-30 animate-pulse"></div>
          </Button>

          <p className="text-xs text-center text-gray-500 mt-2">
            By submitting this form, you agree to our{" "}
            <span className="underline">Privacy Policy</span> &{" "}
            <span className="underline">Terms</span>.
          </p>
        </form>
      </CardContent>
    </Card>
  );

  if (variant === "compact") {
    return FormCard;
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-14">
            <h2
              className="text-4xl md:text-5xl font-extrabold"
              style={{ color: "#224139" }}
            >
              Ready to Find Your Dream Property?
            </h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              Get a free consultation with our expert team. Share your requirements
              and let us help you find the perfect property investment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Left - Info */}
            <div className="space-y-6">
              <Card className="rounded-2xl shadow-lg bg-white/80 backdrop-blur-md border">
                <CardHeader>
                  <CardTitle className="text-2xl">📞 Get In Touch</CardTitle>
                  <CardDescription>
                    Contact our experienced team for personalized real estate solutions
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="text-[#224139]" size={20} />
                    <div>
                      <div className="font-semibold">Call Us Now</div>
                      <div className="text-gray-600">+91 8088113333</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="text-[#224139]" size={20} />
                    <div>
                      <div className="font-semibold">Email Us</div>
                      <div className="text-gray-600">info@tandtrealty.in</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-[#224139] mt-1" size={20} />
                    <div>
                      <div className="font-semibold">HARERA Registered</div>
                      <div className="text-gray-600">Reg No: /Ext1/2023/222</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Why Choose Us */}
              <div
                className="p-6 rounded-2xl text-white shadow-lg"
                style={{ backgroundColor: "#224139" }}
              >
                <h3 className="text-xl font-semibold mb-3">Why Choose T&T Realty?</h3>
                <ul className="space-y-2 text-sm">
                  <li>✓ 10+ Years of Experience</li>
                  <li>✓ 2000+ Satisfied Customers</li>
                  <li>✓ HARERA Registered Company</li>
                  <li>✓ End-to-end Property Solutions</li>
                  <li>✓ Transparent Dealings</li>
                </ul>
              </div>
            </div>

            {/* Right - Form */}
            {FormCard}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
