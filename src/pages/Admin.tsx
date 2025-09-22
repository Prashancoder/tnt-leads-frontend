import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Define Lead type
interface Lead {
  _id: string;
  name: string;
  email?: string;
  phone: string;
  message?: string;
  source?: string;
  createdAt: string;
}

// API helper
const apiGet = async <T>(url: string): Promise<T> => {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);
  return res.json();
};

const Admin = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchLeads = async () => {
      try {
        const data = await apiGet<Lead[]>('https://tnt-leads-backend.onrender.com/api/leads');
        if (isMounted) setLeads(data);
      } catch (err) {
        console.error(err);
        if (isMounted) setError('Failed to load leads');
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchLeads();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6">Leads</h1>

        {loading && <div>Loading...</div>}
        {error && <div className="text-destructive mb-4">{error}</div>}

        {!loading && !error && (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {leads.map((lead) => (
              <Card key={lead._id} className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    <span>{lead.name}</span>
                    <span className="text-xs text-muted-foreground">
                      {new Date(lead.createdAt).toLocaleString()}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-1 text-sm">
                  <div><span className="font-medium">Phone:</span> {lead.phone}</div>
                  {lead.email && <div><span className="font-medium">Email:</span> {lead.email}</div>}
                  {lead.source && <div><span className="font-medium">Source:</span> {lead.source}</div>}
                  {lead.message && <div className="pt-2"><span className="font-medium">Message:</span> {lead.message}</div>}
                </CardContent>
              </Card>
            ))}

            {leads.length === 0 && <div className="text-muted-foreground">No leads yet.</div>}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Admin;
