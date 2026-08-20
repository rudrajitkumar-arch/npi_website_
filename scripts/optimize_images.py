import os
from PIL import Image

target_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '../public/images'))

def optimize():
    if not os.path.exists(target_dir):
        print(f"Directory {target_dir} does not exist.")
        return

    print("Starting automated image optimization...")
    total_before = 0
    total_after = 0

    for root, _, files in os.walk(target_dir):
        for f in sorted(files):
            if f.startswith('.') or not (f.lower().endswith('.jpg') or f.lower().endswith('.jpeg') or f.lower().endswith('.png') or f.lower().endswith('.webp')):
                continue
            
            p = os.path.join(root, f)
            sz_before = os.path.getsize(p)
            total_before += sz_before

            try:
                im = Image.open(p).convert('RGB')
                w, h = im.size

                # Resize if max dimension is larger than 1000px
                max_dim = 1000
                if w > max_dim or h > max_dim:
                    if w >= h:
                        new_w = max_dim
                        new_h = int(h * (max_dim / w))
                    else:
                        new_h = max_dim
                        new_w = int(w * (max_dim / h))
                    im = im.resize((new_w, new_h), Image.Resampling.LANCZOS)

                # Save as optimized JPEG
                im.save(p, 'JPEG', quality=82, optimize=True, progressive=True)
                sz_after = os.path.getsize(p)
                total_after += sz_after

                reduction = ((sz_before - sz_after) / sz_before) * 100 if sz_before > 0 else 0
                print(f"Optimized {f:30s} | {sz_before/1024:6.1f}KB -> {sz_after/1024:6.1f}KB ({reduction:4.1f}% smaller)")
            except Exception as e:
                print(f"Error optimizing {f}: {e}")

    print(f"\nOptimization complete! Total size: {total_before/1024/1024:.2f}MB -> {total_after/1024/1024:.2f}MB")

if __name__ == '__main__':
    optimize()
