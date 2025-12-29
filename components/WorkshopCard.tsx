import Link from 'next/link';
import Card from '@/components/ui/Card';

interface WorkshopCardProps {
  title: string;
  tagline: string;
  slug: string;
  featured?: boolean;
}

export default function WorkshopCard({ title, tagline, slug, featured }: WorkshopCardProps) {
  return (
    <Link href={`/workshops/${slug}`}>
      <Card hover className="h-full relative">
        {featured && (
          <div className="absolute top-4 right-4 bg-mint-400 text-white text-xs font-bold px-3 py-1 rounded-full">
            Featured
          </div>
        )}
        <h3 className="font-serif text-2xl font-bold text-charcoal mb-3">{title}</h3>
        <p className="text-gray-600">{tagline}</p>
        <div className="mt-4 text-mint-400 font-medium inline-flex items-center group-hover:translate-x-1 transition-transform">
          Learn More →
        </div>
      </Card>
    </Link>
  );
}
