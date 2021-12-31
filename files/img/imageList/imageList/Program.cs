using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace imageList
{
    internal class Program
    {
        static string path = AppDomain.CurrentDomain.BaseDirectory;
        static void Main(string[] args)
        {
            Directory.CreateDirectory(path + "temp");
            List<string> allfiles = Directory.GetFiles(path, "*.*", SearchOption.AllDirectories).Where(s => s.EndsWith(".gif") || s.EndsWith(".jpg") || s.EndsWith(".png") || s.EndsWith(".jpeg")).ToList();
            for(int i = 0; i < allfiles.Count; i++)
            {
                Console.WriteLine(allfiles[i]);
                string fileName = Path.GetFileName(allfiles[i]);
                Console.WriteLine(fileName);
                try
                {
                    File.Move(allfiles[i], "temp\\" + (i + 1) + "." + fileName.Split('.')[1]);
                }
                catch (Exception)
                {
                }
            }
            allfiles = Directory.GetFiles(path + "temp", "*.*", SearchOption.AllDirectories).Where(s => s.EndsWith(".gif") || s.EndsWith(".jpg") || s.EndsWith(".png") || s.EndsWith(".jpeg")).ToList();
            foreach (string file in allfiles)
            {
                File.Move(file, path + Path.GetFileName(file));
            }
            Directory.Delete(path + "temp", true);
        }
    }
}
